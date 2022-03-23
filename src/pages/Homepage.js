import React from 'react';

const homeStyle = {
   main:{
    textAlign: 'center'
   }
    
}

const HomePage = () => (
    <React.Fragment>
        <div style={homeStyle.main} class="homepage-main">
    <h1>Welcome</h1>
   
    <p>Learn about <a href="https://docs.microsoft.com/aspnet/core">building Web apps with ASP.NET Core</a>.</p>
    </div>
    </React.Fragment>
    
);

export default HomePage;
