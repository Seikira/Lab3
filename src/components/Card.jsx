import styles from './Card.module.css';

const Card = ({ travel }) => {
  return (
    <div className={styles.card}>
      {/* Card Image */}
      <div className={styles.imageContainer}>
        <img 
          src={travel.img.src} 
          alt={travel.img.alt} 
          className={styles.cardImage} 
        />
      </div>

      {/* Text Container (Stacked Text) */}
      <div className={styles.textContainer}>
        {/* Info section (Pin, Country, Google Map link) */}
        <div className={styles.info}>
          <div className={styles.location}>
            <img
              src="https://res.cloudinary.com/dgkpobybj/image/upload/v1737755773/marker_j56pma.png"
              alt="Location Pin"
              className={styles.locationPin}
            />
            <span>{travel.country}</span>
            <a
              href={travel.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.googleMapLink}
            >
              View on Google Maps
            </a>
          </div>
        </div>

        {/* Location Name */}
        <h2 className={styles.locationName}>{travel.title}</h2>

        {/* Dates */}
        <p className={styles.dates}>{travel.dates}</p>

        {/* Description */}
        <p className={styles.description}>{travel.text}</p>
      </div>
    </div>
  );
};

export default Card;
