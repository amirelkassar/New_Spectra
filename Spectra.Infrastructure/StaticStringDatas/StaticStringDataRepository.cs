using MongoDB.Driver;
using Spectra.Application.Interfaces;
using Spectra.Application.StaticStringDatas;
using Spectra.Domain.Shared.Common.Exceptions;
using Spectra.Domain.StaticStringDatas;
using System.Xml;

namespace Spectra.Infrastructure.StaticStringDatas
{
    public class StaticStringDataRepository /*: IStaticStringDataRepository*/
    {

        private readonly IMongoCollection<StaticText> _staticText;

        public StaticStringDataRepository(IMongoDbService mongoDbService)
        {
            var database = mongoDbService.DataBase;
            _staticText = database.GetCollection<StaticText>("StaticText");
        }

        //public async Task AddAsync(StaticText staticText)
        //{
        //    await _staticText.InsertOneAsync(staticText);
        //}
        //public class DatabaseSeeder
        //{
        //    private readonly IMongoCollection<StaticText> _collection;

        //    public DatabaseSeeder(IMongoDatabase database)
        //    {
        //        _staticText = database.GetCollection<StaticText>("MyCollection");
        //    }

            public async Task SeedDataAsync()
            {
                bool hasData = await _staticText.Find(_ => true).AnyAsync();
                if (!hasData)
                {
                    var seedData = new List<StaticText>
                    {
                new StaticText {  Id = 1 , Titel="Contract clause 1" , Data="أولاً: مركز سبيكترا الطبي التابع لشركة مستقبل الرعاية الطبية، المقيد بموجب الترخيص الصادر من وزارة التجارة برقم 1010697542 وعنوانه: الرياض، ظهرة لبن، شارع الفروسية، ويمثله في التوقيع على هذا العقد مديرة العمليات والتشغيل في مركز سبيكترا الطبي، ويشار إليه فيما بعد بالطرف الأول" , TypeData=Domain.Enumeration.TypeDatas.ContracTerms  }  ,
                new StaticText {  Id = 2 , Titel="Contract clause 2" , Data="\r\nثانياً: السيد/ة/                        سعودي/ة الجنسية بموجب الهوية الوطنية رقم                     ، ويشار اليه فيما بعد بالطرف الثاني.\r\nويشار إلى أي من الطرفين منفرداً بكلمة \"طرف\" وإلى الطرفين مجتمعين بكلمة \"طرفين\"." , TypeData=Domain.Enumeration.TypeDatas.ContracTerms  }  ,
                new StaticText {  Id = 3 , Titel="Contract clause 3" , Data="أولاً: مركز سبيكترا الطبي التابع لشركة مستقبل الرعاية الطبية، المقيد بموجب الترخيص الصادر من وزارة التجارة برقم 1010697542 وعنوانه: الرياض، ظهرة لبن، شارع الفروسية، ويمثله في التوقيع على هذا العقد مديرة العمليات والتشغيل في مركز سبيكترا الطبي، ويشار إليه فيما بعد بالطرف الأول" , TypeData=Domain.Enumeration.TypeDatas.ContracTerms  }  ,
                new StaticText {  Id = 4 , Titel="Repors" , Data="SPEECH Pediatrics LANGUAGE ASSESSMENT" , TypeData=Domain.Enumeration.TypeDatas.Report  }  ,
                new StaticText {  Id = 5 , Titel="Repors" , Data="Psychological Initial Assessment" , TypeData=Domain.Enumeration.TypeDatas.Report  }  ,
                new StaticText {  Id = 6, Titel="Repors" , Data=" Recommendation OT VR" , TypeData=Domain.Enumeration.TypeDatas.Report  }  ,
                new StaticText {  Id = 7 , Titel="Repors" , Data=" Common question" , TypeData=Domain.Enumeration.TypeDatas.Report  }  ,
                new StaticText {  Id = 8, Titel="Repors" , Data="Doctors follow up" , TypeData=Domain.Enumeration.TypeDatas.Report  }  ,
               
            };
                    await _staticText.InsertManyAsync(seedData);
                }
            }
        
        //public async Task UpdateAsync(StaticText staticText)
        //{
        //    await _staticText.ReplaceOneAsync(p => p.Id == staticText.Id, staticText);
        //}

        //public async Task DeleteAsync(string id)
        //{
        //    await _staticText.DeleteOneAsync(p => p.Id == id);
        //}

        //public async Task<StaticText> GetByIdAsync(string id)
        //{

        //    var entity = await _staticText.Find(c => c.Id == id).FirstOrDefaultAsync();
        //    if (entity == null)
        //    {
        //        throw new NotFoundException("StaticStringData", id);
        //    }
        //    return entity;
        //}

        public async Task<IReadOnlyCollection<StaticText>> GetAllAsync()
        {
            return await _staticText.Find(p => true).ToListAsync();
        }
    }
}
