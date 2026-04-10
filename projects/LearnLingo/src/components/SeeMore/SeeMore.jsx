import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledButton } from 'components/StyledButton/StyledButton';
import selectWebsite from '../../redux/website/website-selector';

import { Bars } from 'react-loader-spinner';

import css from './SeeMore.module.css';
import { selectTeachers } from '../../redux/teachers/teachers-select';

import PropTypes from "prop-types";

export default function SeeMore({teachers, getTeachers}) {
  const { isLoading } = useSelector(selectTeachers);
  const { color } = useSelector(selectWebsite);

  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    dispatch(getTeachers(pageSize));
  }, [dispatch, pageSize, getTeachers]);

  function buttonHandler() {
    setPageSize(pageSize + 4);
  }

  return isLoading ? (
    <Bars
      height="80"
      width="80"
      radius="9"
      color={color.primary}
      ariaLabel="loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  ) : (
    teachers?.length !== 0 && (
      <StyledButton
        color={color.primary}
        $subcolor={color.secondary}
        className={css['button']}
        onClick={buttonHandler}
        $maxwidth="183px"
        type="button"
      >
        More
      </StyledButton>
    )
  );
}

SeeMore.propTypes = {
  teachers: PropTypes.array,
  getTeachers: PropTypes.func,
}