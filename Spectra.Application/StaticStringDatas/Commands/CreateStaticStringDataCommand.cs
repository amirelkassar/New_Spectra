//using MediatR;
//using Spectra.Application.Messaging;
//using Spectra.Domain.Enumeration;
//using Spectra.Domain.Shared.Wrappers;

//namespace Spectra.Application.StaticStringDatas.Commands
//{
//    public class CreateStaticStringDataCommand : ICommand<OperationResult<string>>
//    {
//        public string? Titel {  get; set; }
//        public string Data { get; set; }
//        public TypeDatas typeData { get; set }
//    }

//    public class CreateStaticStringDataCommandHandler : IRequestHandler<CreateStaticStringDataCommand, OperationResult<string>>
//    {
//        private readonly IStaticStringDataRepository _staticStringDataRepository;

//        public CreateStaticStringDataCommandHandler(IStaticStringDataRepository staticStringDataRepository)
//        {
//            _staticStringDataRepository = staticStringDataRepository;
//        }

//        public async Task<OperationResult<string>> Handle(CreateStaticStringDataCommand request, CancellationToken cancellationToken)
//        {
//            var data = StaticTexst(){ }


//            await _staticStringDataRepository.AddAsync(patient);
//            return OperationResult<string>.Success(patient.Id);

//        }
//    }

   

//}
