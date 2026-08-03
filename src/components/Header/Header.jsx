function Header({ title, subtitle, totalProducts }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>Total Products: {totalProducts}</p>    
        </div>
    );
}