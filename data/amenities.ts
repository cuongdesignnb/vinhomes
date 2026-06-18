export type Amenity = {
  id: number;
  title: string;
  image: string;
  icon: "park" | "school" | "hospital" | "mall" | "pool" | "sport";
};

export const amenities: Amenity[] = [
  { id: 1, title: "Công viên", image: "/images/amenity-park.jpg", icon: "park" },
  { id: 2, title: "Trường học", image: "/images/amenity-school.jpg", icon: "school" },
  { id: 3, title: "Bệnh viện", image: "/images/amenity-hospital.jpg", icon: "hospital" },
  { id: 4, title: "Trung tâm thương mại", image: "/images/amenity-mall.jpg", icon: "mall" },
  { id: 5, title: "Bể bơi", image: "/images/amenity-pool.jpg", icon: "pool" },
  { id: 6, title: "Thể thao", image: "/images/amenity-sport.jpg", icon: "sport" },
];
