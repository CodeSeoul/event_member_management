variable "resource_tag_name" {
  type = string
}

variable "namespace" {
  type = string
}

variable "region" {
  type = string
}

variable "aws_profile" {
  type = string
  default = "default"
}

variable "api_name" {
  type = string
}

variable "api_throttling_rate_limit" {
  type = string
}

variable "api_throttling_burst_limit" {
  type = string
}

variable "api_template" {
  type = string
}

variable "api_template_vars" {
  type = string
}

variable "lambda_zip_name" {
  type = string
}

variable "dist_file_path" {
  type = string
}

variable "cognito_identity_pool_name" {
  type = string
}

variable "cognito_identity_pool_provider" {
  type = string
}

variable "github_token" {
  type = string
}

variable "github_owner" {
  type = string
}

variable "github_repo" {
  type = string
}

variable "poll_source_changes" {
  type = string
}

variable "api_metrics_enabled" {
  type = string
}

variable "api_logging_level" {
  type = string
}

variable "lambda_identity_api_timeout" {
  type = string
}

variable "lambda_user_api_timeout" {
  type = string
}

variable "xray_tracing_enabled" {
  type = string
}

variable "api_resources" {
  type = string
}

variable "lambda_identity_memory_size" {
  type = string
}

variable "lambda_identity_timeout" {
  type = string
}

variable "lambda_user_memory_size" {
  type = string
}

variable "lambda_user_timeout" {
  type = string
}

variable "debug_sample_rate" {
  type = string
}

variable "cluster_identifier" {
  type = string
}

variable "availability_zones" {
  type = set(string)
}

variable "database_name" {
  type = string
}

variable "master_username" {
  type = string
}

variable "master_password" {
  type = string
}

variable "backup_retention_period" {
  type = number

}
variable "preferred_backup_window" {
  type = string
}

variable "instance_count" {
  type = number
}

variable "instance_class" {
  type = string
}

//variable "database_accessor_security_group_id" {
//  type = string
//}
