import { ToastContainer } from 'react-toastify';
import styled from 'styled-components';

export const StyledNotyfication = styled(ToastContainer).attrs({
  className: "toast-container",
  toastClassName: "toast",
  bodyClassName: "body",
  progressClassName: "progress",
})`
  .toast {
    background-color: ${(props) => props.color};
    color: black;
  }

`;