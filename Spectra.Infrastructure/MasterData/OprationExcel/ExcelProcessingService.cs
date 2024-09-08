using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Spreadsheet;
using Microsoft.AspNetCore.Http;
using Spectra.Application.MasterData.DiagnoseCommend.Commands;
using Spectra.Application.MasterData.SpecializationCommend.Commands;
using Spectra.Application.MasterData.UploadExcel.Services;

namespace Spectra.Infrastructure.MasterData.ExcelFile
{
    public class ExcelProcessingService : IExcelProcessingService
    {
        public async Task<List<T>> ProcessExcelFile<T>(IFormFile file, Func<List<string>, T> createErntity)
        {
            using (var stream = new MemoryStream())
            {
                await file.CopyToAsync(stream);
                stream.Position = 0;

                using (var document = SpreadsheetDocument.Open(stream, false))
                {
                    var workbookPart = document.WorkbookPart;
                    var sharedStringTable = workbookPart!.SharedStringTablePart?.SharedStringTable;
                    var worksheetPart = workbookPart.WorksheetParts.First();
                    var sheetData = worksheetPart.Worksheet.Elements<SheetData>().First();

                    if (sheetData == null)
                    {
                        throw new Exception("Error: SheetData is empty");
                    }

                    var data = new List<T>();

                    foreach (Row row in sheetData.Elements<Row>().Skip(1))
                    {
                        List<string> cellValues = new List<string>();

                        foreach (Cell cell in row.Elements<Cell>())
                        {
                            string cellValue = GetCellValue(cell, sharedStringTable);
                            cellValues.Add(cellValue);
                        }

                        data.Add(createErntity(cellValues));
                    }

                    return data;
                }
            }
        }

        private string GetCellValue(Cell cell, SharedStringTable? sharedStringTable)
        {
            if (cell.CellValue == null)
            {
                return string.Empty;
            }

            string value = cell.CellValue.InnerText;

            // Check if the cell value is a shared string
            if (cell.DataType != null && cell.DataType.Value == CellValues.SharedString && sharedStringTable != null)
            {
                return sharedStringTable.ElementAt(int.Parse(value)).InnerText;
            }

            return value;
        }
    }

}
