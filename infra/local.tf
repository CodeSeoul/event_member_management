locals {
  tags = {
    environment: var.environment,
    application: "sns-event-api"
  }
  environment_short_name = var.environment == "production" ? "prod" : "dev"
  application_short_name = "sea"
  resource_name_prefix = "${local.application_short_name}-${local.environment_short_name}"
}
