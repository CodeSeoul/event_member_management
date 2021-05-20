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

variable "preferred_maintenance_window" {
  type = string
}

variable "instance_count" {
  type = number
}

variable "instance_class" {
  type = string
}

variable "database_accessor_security_group_id" {
  type = string
}
