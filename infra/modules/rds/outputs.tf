output "write_endpoint" {
  value = aws_rds_cluster.default.endpoint
}

output "read_endpoint" {
  value = aws_rds_cluster.default.reader_endpoint
}
