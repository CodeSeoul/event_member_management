//// Originally from https://github.com/rpstreef/openapi-tf-example
//// The above repo is provided via the Apache License 2.0
//// Credit to Rolf Streetkerk for the original code and referenced modules

locals {
  resource_name_prefix = "${var.namespace}-${var.resource_tag_name}"

//  api_name = var.api_name
//
//  dist_file_path = "./dist"
//
//  lambda_zip_name = "dist-example.zip"
//
//  lambda_layer_name        = "example-lambda-layer"
//  lambda_layer_zip_name    = "dist-layer.zip"
//  lambda_layer_description = "Dependencies to run all Lambda's in the example API"
}

//# -----------------------------------------------------------------------------
//# Module: Cognito Identity
//# -----------------------------------------------------------------------------
//module "cognito" {
//  source = "github.com/rpstreef/tf-cognito?ref=v1.0"
//
//  namespace         = var.namespace
//  resource_tag_name = var.resource_tag_name
//  region            = var.region
//
//  cognito_identity_pool_name     = var.cognito_identity_pool_name
//  cognito_identity_pool_provider = var.cognito_identity_pool_provider
//
//  schema_map = [
//    {
//      name                = "email"
//      attribute_data_type = "String"
//      mutable             = false
//      required            = true
//    },
//    {
//      name                = "phone_number"
//      attribute_data_type = "String"
//      mutable             = false
//      required            = true
//    }
//  ]
//}
//
//# -----------------------------------------------------------------------------
//# Resource: Lambda Layer
//# -----------------------------------------------------------------------------
//data "archive_file" "dummy" {
//  type        = "zip"
//  output_path = "${path.module}/dummy.zip"
//
//  source_content          = "dummy"
//  source_content_filename = "dummy.txt"
//}
//
//resource "aws_lambda_layer_version" "_" {
//  filename   = data.archive_file.dummy.output_path
//  layer_name = "${local.resource_name_prefix}-lambda-layer"
//
//  compatible_runtimes = ["nodejs10.x", "nodejs12.x"]
//
//  description = "OpenAPI Lambda Layer"
//}
//
//# -----------------------------------------------------------------------------
//# Module: CI / CD
//# -----------------------------------------------------------------------------
//module "cicd" {
//  source = "github.com/rpstreef/tf-cicd-lambda"
//
//  resource_tag_name = var.resource_tag_name
//  namespace         = var.namespace
//  region            = var.region
//
//  github_token        = var.github_token
//  github_owner        = var.github_owner
//  github_repo         = var.github_repo
//  poll_source_changes = var.poll_source_changes
//
//  lambda_layer_name     = aws_lambda_layer_version._.layer_name
//  lambda_function_names = "${module.identity.lambda_name},${module.user.lambda_names}"
//}
//
//# -----------------------------------------------------------------------------
//# Module: API Gateway
//# -----------------------------------------------------------------------------
//module "apigateway" {
//  source            = "github.com/rpstreef/tf-apigateway?ref=v1.3.1"
//  resource_tag_name = var.resource_tag_name
//  namespace         = var.namespace
//  region            = var.region
//
//  api_name                   = local.api_name
//  api_throttling_rate_limit  = var.api_throttling_rate_limit
//  api_throttling_burst_limit = var.api_throttling_burst_limit
//  api_metrics_enabled        = var.api_metrics_enabled
//  api_logging_level          = var.api_logging_level
//  api_template               = file("../../services/api/${local.api_name}.yml")
//  api_template_vars = {
//    region = var.region
//
//    cognito_user_pool_arn = module.cognito.cognito_user_pool_arn
//
//    lambda_identity_arn     = module.identity.lambda_arn
//    lambda_identity_timeout = var.lambda_identity_api_timeout
//
//    lambda_user_arn     = module.user.lambda_arn
//    lambda_user_timeout = var.lambda_user_api_timeout
//  }
//
//  xray_tracing_enabled = var.xray_tracing_enabled
//
//  resources = var.api_resources
//}
//
//# -----------------------------------------------------------------------------
//#  Modules: Lambda services
//# -----------------------------------------------------------------------------
//module "identity" {
//  source = "./modules/identity"
//
//  resource_tag_name = var.resource_tag_name
//  namespace         = var.namespace
//  region            = var.region
//
//  lambda_layer_arn = aws_lambda_layer_version._.arn
//
//  lambda_memory_size = var.lambda_identity_memory_size
//  lambda_timeout     = var.lambda_identity_timeout
//
//  cognito_user_pool_arn       = module.cognito.cognito_user_pool_arn
//  cognito_user_pool_client_id = module.cognito.cognito_user_pool_client_id
//  cognito_user_pool_id        = module.cognito.cognito_user_pool_id
//
//  api_gateway_deployment_execution_arn = module.apigateway.deployment_execution_arn
//  api_gateway_rest_api_id              = module.apigateway.rest_api_id
//
//  debug_sample_rate = var.debug_sample_rate
//}
//
//module "user" {
//  source = "./modules/user"
//
//  resource_tag_name = var.resource_tag_name
//  namespace         = var.namespace
//  region            = var.region
//
//  lambda_layer_arn = aws_lambda_layer_version._.arn
//
//  lambda_memory_size = var.lambda_user_memory_size
//  lambda_timeout     = var.lambda_user_timeout
//
//  cognito_user_pool_arn       = module.cognito.cognito_user_pool_arn
//  cognito_user_pool_client_id = module.cognito.cognito_user_pool_client_id
//  cognito_user_pool_id        = module.cognito.cognito_user_pool_id
//
//  api_gateway_deployment_execution_arn = module.apigateway.deployment_execution_arn
//  api_gateway_rest_api_id              = module.apigateway.rest_api_id
//
//  debug_sample_rate = var.debug_sample_rate
//}

module "rds" {
  source = "./modules/rds"

  availability_zones = var.availability_zones
  backup_retention_period = var.backup_retention_period
  cluster_identifier = "${local.resource_name_prefix}-${var.cluster_identifier}"
  database_name = var.database_name
  instance_class = var.instance_class
  master_password = var.master_password
  master_username = var.master_username
  preferred_backup_window = var.preferred_backup_window
  instance_count = var.instance_count
  database_accessor_security_group_id = aws_security_group.rds_accessor.id
}

resource "aws_security_group" "rds_accessor" {
  name = "${local.resource_name_prefix}-rds-accessor"
}