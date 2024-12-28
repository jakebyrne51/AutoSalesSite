using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.Model;

namespace ContactFormBackend.Services
{
    public class DynamoDbService
    {
        private readonly IAmazonDynamoDB _dynamoDb;
        private const string TableName = "YourTableName";

        public DynamoDbService(IAmazonDynamoDB dynamoDb)
        {
            _dynamoDb = dynamoDb;
        }

        public async Task SaveContactForm(Dictionary<string, AttributeValue> item)
        {
            await _dynamoDb.PutItemAsync(new PutItemRequest
            {
                TableName = TableName,
                Item = item
            });
        }
    }
}
