# note: this should never truly be refernced since we are using relative assets
http_path = "/skin/frontend/sport2000/default/"
css_dir = "../css"
sass_dir = "../scss"
images_dir = "../images"
javascripts_dir = "../js"
relative_assets = true

environment = :production
output_style = (environment == :production) ? :compressed : :expanded
#output_style = :expanded

#line_comments = false