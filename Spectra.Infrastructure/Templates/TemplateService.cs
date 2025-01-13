using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DinkToPdf;
using Microsoft.VisualStudio.TextTemplating;
using RazorLight;
using Spectra.Application.Templates.Models;
using Spectra.Application.Templates.Service;

namespace Spectra.Infrastructure.Templates
{
    internal class TemplateService(RazorLightEngine razorLightEngine, SynchronizedConverter synchronizedConverter) : ITemplateService
    {
        private readonly RazorLightEngine _razorLightEngine = razorLightEngine;
        private readonly SynchronizedConverter _synchronizedConverter = synchronizedConverter;

        public async Task<string> GetEmailTemplateAsync<T>(string templateName, T model) => await _razorLightEngine.CompileRenderAsync(templateName, model);

        public async Task<byte[]> GetPdfTemplateAsync<T>(string templateName, T model)
        {
            var template = await _razorLightEngine.CompileRenderAsync(templateName, model);

            var pdfDocument = new HtmlToPdfDocument
            {
                GlobalSettings = new GlobalSettings
                {
                    ColorMode = ColorMode.Color,
                    Orientation = Orientation.Portrait,
                    PaperSize = PaperKind.A4,
                    Out = null // If null, the PDF will be returned as a byte array
                }
            };
            pdfDocument.Objects.Add(new ObjectSettings
            {
                HtmlContent = template,
                WebSettings = { DefaultEncoding = "utf-8" }
            });

            var pdfBytes = _synchronizedConverter.Convert(pdfDocument);
            return pdfBytes;
        }
    }
}
