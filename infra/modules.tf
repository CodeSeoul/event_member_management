module "rds" {
  source = "./modules/rds"

  availability_zones = data.aws_availability_zones.available.names
  backup_retention_period = var.backup_retention_period
  cluster_identifier = "${local.resource_name_prefix}-${var.rds_cluster_identifier}"
  database_name = var.database_name
  instance_class = var.instance_class
  master_password = var.master_password
  master_username = var.master_username
  preferred_backup_window = var.preferred_backup_window
  preferred_maintenance_window = var.preferred_maintenance_window
  instance_count = var.instance_count
  database_accessor_security_group_id = aws_security_group.rds_accessor.id
}
