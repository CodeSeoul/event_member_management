resource "aws_security_group" "rds_accessor" {
  name = "${local.resource_name_prefix}-rds-accessor"
}
