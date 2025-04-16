import re
import json

def parse_svg_paths(svg_text):
    # Regular expressions to extract path data and id
    path_pattern = r'<path\s+d="([^"]+)"\s+id="([^"]+)"[^>]*>'
    
    # Find all matches
    paths = []
    ids = []
    
    for match in re.finditer(path_pattern, svg_text):
        d_value = match.group(1)
        id_value = match.group(2)
        
        paths.append(d_value)
        ids.append(id_value)
    
    # Assuming all paths belong to the same group (Indonesia in your example)
    # You can modify this if you need to group paths differently
    result = {
        "id": "Timor-Leste",  # You can change this or make it dynamic
        "transform": "matrix(6.4876122,0,0,6.4876122,-12925.057,-3966.0743)",  # Example transform
        "paths": paths
    }
    
    return result

def format_output(result):
    # Format the output to match the desired structure
    output = "{\n"
    output += f'      id: "{result["id"]}",\n'
    output += f'      transform: "{result["transform"]}",\n'
    output += "      paths: [\n"
    
    for i, path in enumerate(result["paths"]):
        output += f'        "{path}"'
        if i < len(result["paths"]) - 1:
            output += ","
        output += "\n"
    
    output += "      ]\n"
    output += "    }"
    
    return output

# Example usage
svg_text = '''
<path
                d="m 2252.9175,884.3125 c 0.055,2.702 0.6825,1.5735 2.3395,0.5695 1.584,-0.96 4.035,-1.54 5.794,-2.223 2.832,-1.1 6.902,-2.155 8.884,-4.712 1.141,-1.471 -1.928,-1.171 -2.583,-0.978 -1.78,0.526 -3.354,0.76 -5.177,1.071 -1.953,0.333 -3.761,0.296 -5.768,0.722 -0.756,0.161 -1.779,0.065 -2.417,0.58 -0.675,0.544 -1.0558,1.8335 -1.7598,2.3605 1.674,0.811 1.5113,1.266 0.6873,2.61 z"
                id="path2786"
                data-inkscape-connector-curvature="0"
              />
              <path
                d="m 2243.958,886.033 c 1.332,-0.989 2.0745,-1.35622 3.7015,-1.66322 0.1631,1.156 0.2216,2.41032 -0.4822,3.00559 -0.1493,0.12632 -0.7474,-0.69457 -0.9442,-0.54136 -0.7152,0.55679 -1.4092,-0.53387 -2.2432,-0.83287"
                id="path2788"
                data-inkscape-connector-curvature="0"
              />
            </g>
            <path
              d="m 2230.8492,842.74381 c 7.7226,0 7.7226,-12.02609 0,-12.02609 -7.7282,0 -7.7282,12.02609 0,12.02609"
              id="tl."
              data-inkscape-connector-curvature="0"
            />
'''

result = parse_svg_paths(svg_text)
with open('svg_paths.json', 'w', encoding='utf-8') as json_file:
    json.dump(result, json_file, indent=2)
# formatted_output = format_output(result)
# print(formatted_output)