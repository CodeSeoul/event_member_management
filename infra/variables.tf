variable "region" {
  type = string
  default = "ap-northeast-2"
}

variable "aws_profile" {
  type = string
  default = "default"
}

variable "rds_cluster_identifier" {
  type = string
  default = "api-database"
}

variable "database_name" {
  type = string
  default = "app"
}

variable "master_username" {
  type = string
}

variable "master_password" {
  type = string
}

variable "backup_retention_period" {
  type = number
  default = 5
}

variable "preferred_backup_window" {
  type = string
}

variable "preferred_maintenance_window" {
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

variable "environment" {
  type = string
  default = "development"
}
