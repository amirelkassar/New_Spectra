using MongoDB.Driver;
using MongoDB.Bson;
using System;
using System.Linq.Expressions;

public static class MongoFilterExtensions
{
    public static FilterDefinition<T> AddFilter<T>(this FilterDefinition<T> filter, Expression<Func<T, bool>> condition)
    {
        var filterBuilder = Builders<T>.Filter;
        return filter & filterBuilder.Where(condition);
    }

    public static FilterDefinition<T> AddFilter<T>(this FilterDefinition<T> filter, bool applyFilter, Expression<Func<T, bool>> condition)
    {
        if (applyFilter)
        {
            var filterBuilder = Builders<T>.Filter;
            return filter & filterBuilder.Where(condition);
        }
        return filter;
    }

    public static FilterDefinition<T> AddRegexFilter<T>(this FilterDefinition<T> filter, bool applyFilter, FieldDefinition<T> field, string pattern, string options = "i")
    {
        if (applyFilter)
        {
            var filterBuilder = Builders<T>.Filter;
            var regexFilter = filterBuilder.Regex(field, new MongoDB.Bson.BsonRegularExpression(pattern, options));
            return filter & regexFilter;
        }
        return filter;
    }

}
