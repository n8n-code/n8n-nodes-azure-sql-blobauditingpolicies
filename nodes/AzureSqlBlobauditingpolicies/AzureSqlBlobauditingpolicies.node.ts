import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureSqlBlobauditingpolicies implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Azure SQL Blobauditingpolicies',
		name: 'N8nDevAzureSqlBlobauditingpolicies',
		icon: { light: 'file:./azure-sql-blobauditingpolicies.png', dark: 'file:./azure-sql-blobauditingpolicies.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Azure SQL Database RESTful API manages databases via CRUD operations.',
		defaults: { name: 'Azure SQL Blobauditingpolicies' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevAzureSqlBlobauditingpoliciesApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
		],
	};
}
