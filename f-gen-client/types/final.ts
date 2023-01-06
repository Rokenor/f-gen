export type FinalComponentPropertiesType = {
  [key: string]: string;
};

export type FinalComponentType = {
  id: string;
  name: string;
  properties: FinalComponentPropertiesType;
};

export type FinalMetaType = {
  title: string;
  description: string;
};

export type FinalType = {
  id: number;
  name: string;
  slug: string;
  meta: FinalMetaType;
  components: FinalComponentType[];
};

export type FinalDataHeaderType = {
  title: string;
  subtitle: string;
};

export type FinalDataListType = {
  title: string;
  points: string[];
};

export type FinalDataInfoType = {
  title: string;
  description: string[];
};

export type GalleryType = {
  id: string;
  name: string;
  image: string;
};

export type FinalDataSliderType = {
  title: string;
  gallery: GalleryType[];
};

export type FinalDataPriceItems = {
  id: string;
  name: string;
  currency: string;
  price: string;
  options: string[];
};

export type FinalDataPriceType = {
  title: string;
  items: FinalDataPriceItems[];
};

export type FinalDataFooterType = {
  info: string[];
  copyright: string;
};

export type FinalDataType = {
  header: FinalDataHeaderType;
  list: FinalDataListType;
  info: FinalDataInfoType;
  slider: FinalDataSliderType;
  price: FinalDataPriceType;
  footer: FinalDataFooterType;
};
