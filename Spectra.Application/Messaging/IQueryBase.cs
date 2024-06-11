using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
