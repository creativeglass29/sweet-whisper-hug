import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const baseUrl = "https://creativeglass.in";
  const fullUrl = `${baseUrl}${path}`;
  const fullTitle = `${title} | Creative Glass & Aluminium`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", fullUrl, "property");
    setMeta("og:type", type, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);

    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);
  }, [fullTitle, description, fullUrl, type]);

  return null;
};

export default SEOHead;
