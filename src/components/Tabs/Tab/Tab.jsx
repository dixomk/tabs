import React, { forwardRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import {TabsContext} from '../TabsContext';

const ButtonStyled = styled.button`
  border: none;
  background: ${({active}) => active ? 'rgba(205,120,120, .3)': 'transparent'};
`

const TabStyled = styled.div`
  padding: 10px;
`;
const Tab = forwardRef(
  (
    {
      icon,
      disabled,
      children,
      title,
      onClick,
    },
    ref,
  ) => {
    const {
      active,
      activeIndex,
      onActivate,
      setActiveContent,
      setActiveTitle,
    } = useContext(TabsContext);

    useEffect(() => {
      if (active) {
        setActiveContent(children);
        const activeTitle = typeof title === 'string' ? title : activeIndex + 1;
        setActiveTitle(activeTitle);
      }
    }, [
      active,
      activeIndex,
      children,
      setActiveContent,
      setActiveTitle,
      title,
    ]);

    const onClickTab = (event) => {
      event?.preventDefault();
      onActivate();
      onClick?.(event);
    };

    const renderIcon = (iconProp) => {
      return React.cloneElement(iconProp, {
        style: {
          paddingRight: '4px'
        }
      });
    };

    let renderedIcon = icon ? renderIcon(icon) : null;

    return (
      <ButtonStyled
        ref={ref}
        role="tab"
        aria-selected={active}
        aria-expanded={active}
        disabled={disabled}
        active={active}
        onClick={onClickTab}
      >
        <TabStyled>
          {renderedIcon}
          {title}
        </TabStyled>
      </ButtonStyled>
    );
  },
);

export default Tab;