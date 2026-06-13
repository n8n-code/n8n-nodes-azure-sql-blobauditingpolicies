import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSqlBlobauditingpoliciesApi implements ICredentialType {
        name = 'N8nDevAzureSqlBlobauditingpoliciesApi';

        displayName = 'Azure SQL Blobauditingpolicies API';

        icon: Icon = { light: 'file:../nodes/AzureSqlBlobauditingpolicies/azure-sql-blobauditingpolicies.png', dark: 'file:../nodes/AzureSqlBlobauditingpolicies/azure-sql-blobauditingpolicies.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure SQL Blobauditingpolicies API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
