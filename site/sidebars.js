/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    "intro",
    {
        type: "category",
        label: "Getting Started",
        collapsible: false,
        items: [
            "getting-started/setup",
            "getting-started/hello-world",
        ],
    },
    {
        type: "category",
        label: "Guides",
        collapsible: false,
        items: [
            "guides/basic-drawing",
            "guides/user-input",
            "guides/sprites",
            "guides/audio",
            "guides/saving-data",
            "guides/distribution",
        ],
    },
    {
        type: "category",
        label: "Reference",
        collapsible: false,
        items: [
            "reference/functions",
            "reference/memory",
            "reference/hotkeys",
            "reference/inspiration",
        ],
    },
    {
	    type: "category",
	    label: "Tutorials",
	    collapsible: false,
	    items: [
            {
                type: "category",
                label: "Snake",
                collapsible: true,
                items: [
                    "tutorials/snake/goal",
                    "tutorials/snake/setup-project",
                ]
            }
	    ]
    }
  ],
};
