# Terraform Infrastructure for SNS Event API

Much of this is from Rolf Streetkerk's [blog post](https://dev.to/rolfstreefkerk/openapi-with-terraform-on-aws-api-gateway-17je) and [Github repo](https://github.com/rpstreef/openapi-tf-example) licensed under Apache 2.0

## Setup
1. Download and install [Terraform](https://www.terraform.io/downloads.html), or you can be fancy and use [tfswitch](https://github.com/warrensbox/terraform-switcher) if you're on a Unix-based platform
2. Install the [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)
3. Run `aws configure`, and input your access key info when prompted. If you don't have access key info, check with your AWS account administrator
4. Copy `configuration.tfvars.template` to `configuration.tfvars` and fill in the values
5. Run `terraform init infra` from the project root directory
6. Run `terraform apply infra --var-file=configuration.tfvars` to deploy