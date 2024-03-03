import { ChangeLocalization } from 'features/localization';
import { useTranslation } from 'shared/lib/i18n';
import styles from './Localization.module.scss';

export const Localization = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.wrapper}>
			{t('Change localization')}
			<div>
				<ChangeLocalization />
			</div>
		</div>
	);
};
