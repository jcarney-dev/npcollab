---
# Leave the homepage title empty to use the site title
title:
date: 2023-07-13
type: landing

sections:
  - block: hero
    content:
      title: NP COLAB
      image:
        filename: icon.png
      cta:
        label: '**Get Started**'
        url: #
      cta_alt:
        label: Ask a question
        url: #
      cta_note:
        label: >-
         
      text: |-
        **A place to learn, create and collaborate**

        From learning modules, presentations, guides, and more.

        <!--Custom spacing-->
        <div class="mb-3"></div>
        <!--GitHub Button JS-->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
    design:
      background:
        gradient_end: '#ff7e3c'
        gradient_start: '#ffc2a2'
        text_color_light: false
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin

  - block: collection
    id: posts
    content:
      title: Recent Posts
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'

  
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Start here
          tag: start
        - name: MSK
          tag: MSK
        - name: ENT
          tag: ENT
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'
      view: showcase
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false


  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        If you want to get it touch - send me a message
      # Contact (add or remove contact options as necessary)
      contact_links:

      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
    design:
      columns: '2'
---
