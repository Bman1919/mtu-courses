import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing the CSS file for styling
import BranchMenu from './BranchMenu/BranchMenu';

export default function Home() {
  const navigate = useNavigate();

  const [shifted, setShifted] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState({x:0,y:0});
  const titleRef = useRef(null);

  const branches = [
    {name: "Home", fn: () => {navigate("/")}},
    {name: "About", fn: () => {navigate("/about")}},
    {name: "Contact", fn: () => {console.log("Contact")}},
  ];

  useEffect(() => {
    function handleMouseMove(e){
      const threshold = window.innerWidth * 0.75;
      const breakThreshold = window.innerWidth * 0.35;

      if(e.clientX > threshold){
        setShifted(true);
      }
      if(e.clientX < breakThreshold){
        setShifted(false);
      }
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if(titleRef.current){
      const rect = titleRef.current.getBoundingClientRect();
      setMenuAnchor({
        x: rect.right - rect.left + 20,
        y: rect.height / 2 + rect.top - rect.top
      });
    }
  }, [titleRef, shifted]);

  return (
    <div className="home-container"
      style={{
        transition: 'transform 0.5s cubic-bezier(.77,0,.18,1)',
        transform: shifted ? 'translateX(-15vw)' : 'translateX(0)',
        position: 'relative',
        overflow: 'visible'
      }}    
    >
      <div style={{display:'flex', alignItems:'center',position:'relative'}}>
        <h1 ref={titleRef} style={{marginRight:0}}>Welcome to the Home Page</h1>
        {shifted && (
          <div style={{position:'absolute', left: '100%', top: '50%', transform: 'translateY(-45%)'}}>
            <BranchMenu 
              x={0} 
              y={menuAnchor.y * 5} 
              endX={180}
              height={menuAnchor.y * 10}
              branches={branches}
            />
          </div>
        )}
      </div>
      <p>This is the main page of our application.</p>
      <p>
        You can navigate to the <a href="/about">About page</a> to learn more.
      </p>
    </div>
  );
}