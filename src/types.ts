/* eslint-disable max-len */

import {google} from "@google-cloud/dialogflow-cx/build/protos/protos";

/**
 * Represents rich content that can be sent in a response.
 */
export class RichContent implements google.protobuf.IStruct {
  richContent?: Array<RichContentElement[]>;
  /** Struct fields */
  fields?: ({ [k: string]: google.protobuf.IValue }|null);

  /**
     * Converts this RichContent to JSON.
     * @param {Array<RichContentElement[]>} richContent - The rich content to convert to JSON.
  */
  constructor(richContent?: Array<RichContentElement[]>) {
    this.richContent = richContent;
  }

  /**
     * Converts this RichContent to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      richContent: this.richContent,
    };
  }
}

/**
 * Represents a single element of rich content that can be sent in a response.
 */
export class RichContentElement {
  /**
   * The type of the rich content element.
   */
  type?: string;

  /**
   * The title of the rich content element.
   */
  title?: string;

  /**
   * The subtitle of the rich content element.
   */
  subtitle?: string;

  /**
   * The image of the rich content element.
   */
  image?: Image;

  /**
   * The anchor of the rich content element.
   */
  anchor?: Anchor;

  /**
   * The text of the rich content element.
   */
  text?: Text;

  /**
   * The raw URL of the rich content element.
   */
  rawUrl?: string;

  /**
   * The accessibility text of the rich content element.
   */
  accessibilityText?: string;

  /**
   * The icon of the rich content element.
   */
  icon?: Icon;

  /**
   * The mode of the rich content element.
   */
  mode?: string;

  /**
   * The event of the rich content element.
   */
  event?: Event;

  /**
   * The options of the rich content element.
   */
  options?: Option[];

  /**
   * The citations of the rich content element.
   */
  citations?: Citation[];

  /**
   * The HTML of the rich content element.
   */
  html?: string;

  /**
   * @param {string} type - The type of the rich content element.
   * @param {string} title - The title of the rich content element.
   * @param {string} subtitle - The subtitle of the rich content element.
   * @param {Image} image - The image of the rich content element.
   * @param {Anchor} anchor - The anchor of the rich content element.
   * @param {Text} text - The text of the rich content element.
   * @param {string} rawUrl - The raw URL of the rich content element.
   * @param {string} accessibilityText - The accessibility text of the rich content element.
   * @param {Icon} icon - The icon of the rich content element.
   * @param {string} mode - The mode of the rich content element.
   * @param {Event} event - The event of the rich content element.
   * @param {Option[]} options - The options of the rich content element.
   * @param {Citation[]} citations - The citations of the rich content element.
   * @param {string} html - The HTML of the rich content element.
   */
  constructor(
    type?: string,
    title?: string,
    subtitle?: string,
    image?: Image,
    anchor?: Anchor,
    text?: Text,
    rawUrl?: string,
    accessibilityText?: string,
    icon?: Icon,
    mode?: string,
    event?: Event,
    options?: Option[],
    citations?: Citation[],
    html?: string,
  ) {
    this.type = type;
    this.title = title;
    this.subtitle = subtitle;
    this.image = image;
    this.anchor = anchor;
    this.text = text;
    this.rawUrl = rawUrl;
    this.accessibilityText = accessibilityText;
    this.icon = icon;
    this.mode = mode;
    this.event = event;
    this.options = options;
    this.citations = citations;
    this.html = html;
  }

  /**
   * Converts this RichContentElement to JSON.
   * @return {Object} JSON object
   */
  toJSON(): { [k: string]: unknown } {
    return {
      type: this.type,
      title: this.title,
      subtitle: this.subtitle,
      image: this.image,
      anchor: this.anchor,
      text: this.text,
      rawUrl: this.rawUrl,
      accessibilityText: this.accessibilityText,
      icon: this.icon,
      mode: this.mode,
      event: this.event,
      options: this.options,
      citation: this.citations,
      html: this.html,
    };
  }
}


/**
 * Represents an icon.
 */
export class Icon {
  /**
     * The type of the icon.
     */
  type?: string;
  /**
     * The color of the icon.
     */
  color?: string;

  /**
   * @param {string} type - The type of the rich content element.
   * @param {string} color - The Color of the icon.
   */
  constructor(type?: string, color?: string) {
    this.type = type;
    this.color = color;
  }

  /**
     * Converts this Icon to JSON.
     * @return {Object} JSON object
     */
  toJSON(): { [k: string]: unknown } {
    return {
      type: this.type,
      color: this.color,
    };
  }
}

/**
 * Represents an anchor.
 */
export class Anchor {
  /**
     * The URL of the resource.
     */
  href?: string;

  /**
   * Creates a new instance of the class.
   * @param {string} href - The URL of the resource.
   */
  constructor(href?: string) {
    this.href = href;
  }

  /**
     * Converts this Anchor to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      href: this.href,
    };
  }
}

/**
 * Represents an Image.
 */
export class Image {
  /**
     * The URL of the resource.
     */
  rawUrl?: string;

  /**
   * Creates a new instance of the class.
   * @param {string} rawUrl - The URL of the resource.
   */
  constructor(rawUrl?: string) {
    this.rawUrl = rawUrl;
  }

  /**
     * Converts this Image to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      rawUrl: this.rawUrl,
    };
  }
}

export type Text = string[] | string;

/**
 * Represents a citation.
 */
export class Citation {
  title?: string;
  subtitle?: string;
  anchor?: Anchor;

  /**
   * Creates a new instance of the class.
   * @param {string} title - The title.
   * @param {string} subtitle - The subtitle.
   * @param {Anchor} anchor - The Anchor.
   */
  constructor(title?: string, subtitle?: string, anchor?: Anchor) {
    this.title = title;
    this.subtitle = subtitle;
    this.anchor = anchor;
  }

  /**
     * Converts this Citation to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      title: this.title,
      subtitle: this.subtitle,
      anchor: this.anchor,
    };
  }
}

/**
 * Represents an event.
 */
export class Event {
  /**
     * The event of the resource.
     */
  event?: string;

  /**
   * Creates a new instance of the class.
   * @param {string} event - The event.
   */
  constructor(event?: string) {
    this.event = event;
  }

  /**
     * Converts this Citation to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      event: this.event,
    };
  }
}

/**
 * Represents an option.
 */
export class Option {
  mode?: string;
  text?: string;
  image?: Image;
  anchor?: Anchor;

  /**
   * Creates a new instance of the class.
   * @param {string} mode - The mode.
   * @param {string} text - The text.
   * @param {Image} image - The image.
   * @param {Anchor} anchor - The Anchor.
   */
  constructor(mode?: string, text?: string, image?: Image, anchor?: Anchor) {
    this.mode = mode;
    this.text = text;
    this.image = image;
    this.anchor = anchor;
  }

  /**
     * Converts this Option to JSON.
     * @return {Object} JSON object
  */
  toJSON(): { [k: string]: unknown } {
    return {
      mode: this.mode,
      text: this.text,
      image: this.image,
      anchor: this.anchor,
    };
  }
}


