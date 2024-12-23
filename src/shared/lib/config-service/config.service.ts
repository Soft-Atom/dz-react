import { TConfig } from './config.service.types';
import { ConfigSchema } from './config.schemas';
import { TZodType } from '../validation/zod.types';
import { zodValidate } from '../validation/zod-validate.helper';

export class ConfigService {
	private static instance: ConfigService;
	private readonly config: TConfig;
	private static configSchema: TZodType<TConfig>;

	private constructor() {
		this.config = zodValidate(import.meta.env, ConfigService.configSchema);
	}
	public static get(key: keyof TConfig) {
		if (!ConfigService.instance) ConfigService.instance = new ConfigService();
		return ConfigService.instance.config[key];
	}
	public static init(schema: TZodType<TConfig>) {
		ConfigService.configSchema = schema;
	}
}

ConfigService.init(ConfigSchema);
