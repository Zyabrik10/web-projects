import FilterForm from 'components/FilterForm/FilterForm';
import css from './TeachersListSec.module.css';
import globalCss from 'css/global.module.css';
import TeachersList from 'components/TeachersList/TeachersList';
import { selectTeachers } from '../../../../redux/teachers/teachers-select';
import { useDispatch, useSelector } from 'react-redux';
import SeeMore from 'components/SeeMore/SeeMore';

import { useEffect } from 'react';
import { getTeachers } from '../../../../redux/teachers/teachers-action';

export default function TeachersListSec() {
  const { isLoading, teachers } = useSelector(selectTeachers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachers(4));
  }, [dispatch]);

  return (
    <section className={css['teachers-list']}>
      <div className={globalCss['container']}>
        <FilterForm />
        <TeachersList teachersList={teachers} />
        {teachers?.length === 0 && !isLoading &&  <p className={css['p']}>No teachers</p>}
        <SeeMore teachers={teachers} getTeachers={getTeachers} />
      </div>
    </section>
  );
}
