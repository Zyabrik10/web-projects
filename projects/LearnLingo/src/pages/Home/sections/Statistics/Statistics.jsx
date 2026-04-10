import { useSelector } from 'react-redux';
import css from './Statistics.module.css';
import globalCss from 'css/global.module.css';
import selectWebsite from '../../../../redux/website/website-selector';

export default function Statistics() {
  const { color } = useSelector(selectWebsite);

  return (
    <section className={css['statistics']}>
      <div className={globalCss['container']}>
        <div className={css["stats"]} style={{borderColor: color.primary}}>
          <div className={css["box"]}>
            <p className={css["number"]}>32,000 <span>+
              </span></p>
            <p className={css["desc"]}>Experienced tutors</p>
          </div>
          <div className={css["box"]}>
            <p className={css["number"]}>300,000 <span>+
              </span></p>
            <p className={css["desc"]}>5-star tutor reviews</p>
          </div>
          <div className={css["box"]}>
            <p className={css["number"]}>120 <span>+
              </span></p>
            <p className={css["desc"]}>Subjects taught</p>
          </div>
          <div className={css["box"]}>
            <p className={css["number"]}>200 <span>+
              </span></p>
            <p className={css["desc"]}>Tutor nationalities</p>
          </div>
        </div>
      </div>
    </section>
  );
}
