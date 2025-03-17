import type{
  DeployTarget,
} from '@/types/env'

export const DEPLOY_TARGET = <DeployTarget> process.env.DEPLOY_TARGET ?? 'local'
