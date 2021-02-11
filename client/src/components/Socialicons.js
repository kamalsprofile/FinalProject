import React, {useState} from "react";
import LineIcon from 'react-lineicons';

function Socialicons(props){
  const [socialLinks, setSocialLinks] = useState({});

  

  return (
    <ul className={props.bordered ? 'mi-socialicons mi-socialicons-bordered' : 'mi-socialicons'}>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={""}>
          <LineIcon name="facebook"/>
        </a>
      </li>
      <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.twitter}>
          <LineIcon name="twitter"/>
        </a>
      </li>
      {!socialLinks.pinterest ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.pinterest}>
          <LineIcon name="pinterest"/>
        </a>
      </li>}
      {!socialLinks.behance ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.behance}>
          <LineIcon name="behance"/>
        </a>
      </li>}
      <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.linkedin}>
          <LineIcon name="linkedin"/>
        </a>
      </li>
      {!socialLinks.dribbble ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.dribbble}>
          <LineIcon name="dribbble"/>
        </a>
      </li>}
      {!socialLinks.github ? null : <li>
        <a rel="noopener noreferrer" target="_blank" href={socialLinks.github}>
          <LineIcon name="github"/>
        </a>
      </li>}
    </ul>
  );
}

export default Socialicons;
