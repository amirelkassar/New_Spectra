﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Spectra.Domain.Shared.Common.Exceptions
{
	[Serializable]
    public class NotFoundException : Exception
    {
        public NotFoundException(string entityName, object key)
            : base($"Entity \"{entityName}\" with key \"{key}\" was not found.")
        {
        }

        protected NotFoundException(SerializationInfo info, StreamingContext context)
            : base(info, context)
        {
        }
    }
}
