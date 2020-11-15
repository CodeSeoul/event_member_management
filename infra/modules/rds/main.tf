resource "aws_rds_cluster" "default" {
  cluster_identifier      = var.cluster_identifier
  engine                  = "aurora-mysql"
  engine_version          = "5.7.mysql_aurora.2.03.2"
  availability_zones      = var.availability_zones
  database_name           = var.database_name
  master_username         = var.master_username
  master_password         = var.master_password
  backup_retention_period = var.backup_retention_period
  preferred_backup_window = var.preferred_backup_window
  final_snapshot_identifier = var.cluster_identifier
}

resource "aws_rds_cluster_instance" "default" {
  count = var.instance_count

  cluster_identifier = aws_rds_cluster.default.id
  instance_class = var.instance_class
  engine = "aurora-mysql"
  engine_version = "5.7.mysql_aurora.2.03.2"
}

resource "aws_security_group" "default" {
  name = "${var.cluster_identifier}-rds-access"
}

resource "aws_security_group_rule" "default" {
  from_port = 3306
  to_port = 3306
  protocol = "tcp"
  security_group_id = aws_security_group.default.id
  source_security_group_id = var.database_accessor_security_group_id
  type = "ingress"
}
