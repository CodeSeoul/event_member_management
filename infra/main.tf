terraform {
  backend "s3" {
    bucket = "codeseoul-terraform-states"
    key = "sns_event_api"
    region = "ap-northeast-2"
  }

  required_version = "0.15.4"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "3.42.0"
    }
  }
}
