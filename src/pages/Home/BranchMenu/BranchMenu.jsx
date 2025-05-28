import './BranchMenu.css';

export default function BranchMenu({x,y,endX,width=200,height=140,branches, fontSize=16}){ // Branches is in the form: {name: "", fn: () => {}}
    const deltay = height / branches.length;
    const smallY = y - height / 2;

    const maxWidth = Math.max(...branches.map(branch => branch.name.length * fontSize));

    width += maxWidth;

    return (
        <div className="branch-menu">
            <svg width={width} height={height}>
                {branches.map((branch, index) => 
                {   
                    const endY = smallY + deltay * index + deltay / 2;
                    const deltaX = x + ((endX - x) / 2);
                    return (
                        <g key={index} className="branch" onClick={branch.fn}>
                            <path 
                            d={`M ${x} ${y} C ${deltaX} ${y} ${deltaX} ${endY} ${endX} ${endY}`}
                            stroke="black"
                            strokeWidth="3"
                            fill="transparent"
                            style={{
                                strokeDasharray: 300,
                                strokeDashoffset: 300,
                                animation: 'draw 1s ease-in-out forwards',
                                animationDelay: `${index * 0.1}s`,
                            }}
                            />
                            <text 
                                x={endX + 10} 
                                y={endY + 5} 
                                fontSize={fontSize}
                                fill="black"
                                onClick={branch.fn}
                                style={{
                                    opacity: 0,
                                    animation: 'fadeIn 0.5s ease-in-out forwards',
                                    animationDelay: `${index * 0.1 + 1}s`,
                                    cursor: 'pointer',
                                }} > {branch.name} </text>
                        </g>
                    )
                })}
            </svg>
        </div>
    );
}