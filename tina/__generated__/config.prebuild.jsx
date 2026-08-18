// tina/config.js
import { defineConfig } from "tinacms";
var config_default = defineConfig({
  branch: "main",
  clientId: process.env.TINA_CLIENT_ID || "dummy-client-id",
  // Get this from tina.io
  token: process.env.TINA_TOKEN || "dummy-token",
  // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Home Page",
        path: "src/data/pages",
        match: { include: "home" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "heroEyebrow", label: "Hero Eyebrow" },
          { type: "string", name: "heroTitle1", label: "Hero Title 1" },
          { type: "string", name: "heroTitleHighlight", label: "Hero Title Highlight" },
          { type: "string", name: "heroTitle2", label: "Hero Title 2" },
          { type: "string", name: "heroDescription", label: "Hero Description", ui: { component: "textarea" } },
          { type: "string", name: "heroPrimaryButton", label: "Hero Primary Button" },
          { type: "string", name: "heroSecondaryButton", label: "Hero Secondary Button" },
          {
            type: "object",
            list: true,
            name: "stats",
            label: "Stats",
            fields: [
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "icon", label: "Icon" }
            ]
          },
          { type: "string", name: "clienteleEyebrow", label: "Clientele Eyebrow" },
          { type: "string", name: "clienteleTitle", label: "Clientele Title" },
          {
            type: "object",
            list: true,
            name: "clients",
            label: "Clients",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "image", name: "logo", label: "Logo" }
            ]
          }
        ]
      },
      {
        name: "about",
        label: "About Page",
        path: "src/data/pages",
        match: { include: "about" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title1", label: "Title 1" },
          { type: "string", name: "titleHighlight", label: "Title Highlight" },
          { type: "string", name: "title2", label: "Title 2" },
          { type: "string", name: "paragraph1", label: "Paragraph 1", ui: { component: "textarea" } },
          { type: "string", name: "paragraph2", label: "Paragraph 2", ui: { component: "textarea" } },
          { type: "string", name: "paragraph3", label: "Paragraph 3", ui: { component: "textarea" } },
          { type: "image", name: "image", label: "Image" }
        ]
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "src/data/pages",
        match: { include: "contact" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "titleHighlight", label: "Title Highlight" },
          { type: "string", name: "subtitle", label: "Subtitle", ui: { component: "textarea" } },
          { type: "string", name: "mapUrl", label: "Map URL" },
          {
            type: "object",
            list: true,
            name: "contactCards",
            label: "Contact Cards",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "title", label: "Title" },
              { type: "string", list: true, name: "lines", label: "Lines" }
            ]
          },
          { type: "string", name: "footerText1", label: "Footer Text 1" },
          { type: "string", name: "footerText2", label: "Footer Text 2" },
          {
            type: "object",
            list: true,
            name: "stats",
            label: "Stats",
            fields: [
              { type: "string", name: "icon", label: "Icon" },
              { type: "string", name: "value", label: "Value" },
              { type: "string", name: "label", label: "Label" }
            ]
          }
        ]
      },
      {
        name: "gallery",
        label: "Gallery Page",
        path: "src/data/pages",
        match: { include: "gallery" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          {
            type: "object",
            list: true,
            name: "images",
            label: "Images",
            fields: [
              { type: "image", name: "image", label: "Image" },
              { type: "image", name: "thumb", label: "Thumbnail" },
              { type: "string", name: "alt", label: "Alt Text" }
            ]
          }
        ]
      },
      {
        name: "models",
        label: "Models Page",
        path: "src/data/pages",
        match: { include: "models" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title" },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "ctaText", label: "CTA Text" },
          { type: "string", name: "ctaLink", label: "CTA Link" },
          {
            type: "object",
            list: true,
            name: "models",
            label: "Models",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Image" }
            ]
          }
        ]
      },
      {
        name: "navbar",
        label: "Navbar",
        path: "src/data/globals",
        match: { include: "navbar" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: "object",
            list: true,
            name: "navLinks",
            label: "Nav Links",
            fields: [
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "path", label: "Path" }
            ]
          },
          {
            type: "object",
            list: true,
            name: "socialLinks",
            label: "Social Links",
            fields: [
              { type: "string", name: "platform", label: "Platform" },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          { type: "string", name: "ctaText", label: "CTA Text" },
          { type: "string", name: "ctaLink", label: "CTA Link" }
        ]
      },
      {
        name: "footer",
        label: "Footer",
        path: "src/data/globals",
        match: { include: "footer" },
        format: "json",
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          {
            type: "object",
            list: true,
            name: "quickLinks",
            label: "Quick Links",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" }
            ]
          },
          { type: "string", name: "email", label: "Email" },
          { type: "string", name: "phone", label: "Phone" },
          { type: "string", name: "location", label: "Location" },
          { type: "string", name: "copyright", label: "Copyright" },
          {
            type: "object",
            list: true,
            name: "legalLinks",
            label: "Legal Links",
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "url", label: "URL" }
            ]
          }
        ]
      },
      {
        name: "events",
        label: "Events",
        path: "src/data/events",
        format: "json",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "subtitle", label: "Subtitle" },
          { type: "image", list: true, name: "images", label: "Images" }
        ]
      },
      {
        name: "event_sections",
        label: "Event Sections",
        path: "src/data/event_sections",
        format: "json",
        fields: [
          { type: "string", name: "eyebrow", label: "Eyebrow" },
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
          { type: "string", name: "start", label: "Start Year" },
          { type: "string", name: "end", label: "End Year" },
          { type: "string", name: "footer", label: "Footer Text" },
          { type: "string", list: true, name: "items", label: "Event IDs" }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
