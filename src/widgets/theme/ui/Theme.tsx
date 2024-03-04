import { ChangeTheme } from 'features/theme/ui';
import { useTranslation } from 'shared/lib/i18n';
import styles from './Theme.module.scss';

export const Theme = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.wrapper}>
			{t('Change theme')}
			<div>
				<ChangeTheme />
			</div>
		</div>
	);
};
