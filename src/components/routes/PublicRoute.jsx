import React from 'react'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function PublicRoute({ auth , Component }) {

  const navigate = useNavigate()
  useEffect(() => {
    if(auth){
      navigate("/admin")
    }   
  }, [auth, navigate]);
	return <Component />;
}

export default PublicRoute