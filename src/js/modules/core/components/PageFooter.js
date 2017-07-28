import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const styles = {
  PageFooter: {
    background: '#121212',
  },
  sectionBlock: {
    marginTop: '20px',
  },
  parentSectionLink: {
    color: '#fffefe',
    fontSize: '14px',
    fontFamily: "Circular Std",
    fontStyle: 'normal',
    fontWeight: '500',
    textDecoration: 'none',
  },
  subsectionLink: {
    color: '#b6b6b6',
    fontSize: '13px',
    fontFamily: 'Circular Std',
    fontStyle: 'normal',
    fontWeight: '300',
    textDecoration: 'none',
  },
};

const PageFooter = ({ classes, sectionTree }) => {
  const makeSectionLinks = (sectionTree) => {
    return (sectionTree.map((parentSection) => {
        return (
          <div className={classes.sectionBlock} key={parentSection.id}>
            <Link to={`/${parentSection.slug}`} className={classes.parentSectionLink}>
              {parentSection.name}
            </Link><br/>
            {parentSection.subsections.map((subsection) => {
              return makeSubsectionLink(parentSection.slug, subsection);
            })}
          </div>
        );
      })
    );
  };
  const makeSubsectionLink = (parentSectionSlug, subsection) => {
    return (
      <div>
        <Link to={`/${parentSectionSlug}/${subsection.slug}`} className={classes.subsectionLink}>
          {subsection.name}
        </Link>
        <br/>
      </div>
    );
  };
  return (
    <div className={classes.PageFooter}>
      {makeSectionLinks(sectionTree)}
    </div>
  );
};

export default (injectSheet(styles)(PageFooter));