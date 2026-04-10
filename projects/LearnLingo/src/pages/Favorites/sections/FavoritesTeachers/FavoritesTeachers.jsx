import FilterForm from 'components/FilterForm/FilterForm';
import css from './FavoritesTeachers.module.css';
import globalCss from 'css/global.module.css';
import { useDispatch, useSelector } from 'react-redux';
import TeachersList from 'components/TeachersList/TeachersList';
import { useEffect, useState } from 'react';
import { selectAuth } from '../../../../redux/auth/auth-selector';
import { selectTeachers } from '../../../../redux/teachers/teachers-select';

export default function FavoritesTeachers() {
  const { teachers } = useSelector(selectTeachers);
  const { user } = useSelector(selectAuth);
  const [favoriteTeachers, setFavoriteTeachers] = useState([]);

  console.log(favoriteTeachers);

  const dispatch = useDispatch();

  useEffect(() => {
    const favTeachersDB = JSON.parse(localStorage.getItem("favTeachers"));

    
    if (!favTeachersDB) return;
    
    console.log(favTeachersDB);
    const favTeachers = favTeachersDB.filter(({ userId }) => userId === user.id);


    setFavoriteTeachers(teachers.filter(({ id }) => {
      for (let { teacherId } in favTeachers) {
        if (teacherId === id) return true;
      }

      return false;
    }));
  }, [dispatch, teachers, user]);

  return (
    <section className={css['favorites-teachers']}>
      <div className={globalCss['container']}>
        <FilterForm />
        <TeachersList teachersList={[]} />
      </div>
    </section>
  );
}
