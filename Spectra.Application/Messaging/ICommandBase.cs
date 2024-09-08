using MediatR;

namespace Spectra.Application.Messaging
{
    public interface ICommand : IRequest, ICommandBase
    {
    }

    public interface IAuthorizedCommand : IRequest, ICommandBase
    {

    }

    public interface ICommand<TResponse> : IRequest<TResponse?>, ICommandBase
    {
    }
    public interface IAuthorizedCommand<TResponse> : ICommand<TResponse>
    {

    }

    public interface ICommandBase
    {
    }


}
