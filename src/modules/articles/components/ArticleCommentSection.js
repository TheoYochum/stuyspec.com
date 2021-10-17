import React from "react";
import { FacebookProvider, Comments } from 'react-facebook';

const ArticleCommentSection = ({}) => {
return (
    <div>
      <FacebookProvider style={{'display': 'block'}} appId='510092146640696'>
      <Comments href={`https://www.stuyspec.com${window.location.pathname}`} tabs="none" />
    </FacebookProvider>
    </div>
)
}

export default ArticleCommentSection;