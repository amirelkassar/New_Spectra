using MediatR;

namespace Spectra.Application.Messaging
{
    public interface IQuery : IRequest, IQueryBase
    {
    }

    public interface IAuthorizedQuery : IRequest, IQueryBase
    {

    }

    public interface IQuery<TResponse> : IRequest<TResponse?>, IQueryBase
    {
    }
    public interface IAuthorizedQuery<TResponse> : IQuery<TResponse>
    {

    }
    public interface IQueryBase
    {
    }
}
