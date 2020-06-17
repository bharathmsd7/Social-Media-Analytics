import os
import io

def split(filehandler, delimiter=',', row_limit=2000, 
    output_name_template='output.csv', output_path='', keep_headers=True):
    """
    Splits a CSV file into multiple pieces.
    
    A quick bastardization of the Python CSV library.
    Arguments:
        `row_limit`: The number of rows you want in each output file. 10,000 by default.
        `output_name_template`: A %s-style template for the numbered output files.
        `output_path`: Where to stick the output files.
        `keep_headers`: Whether or not to print the headers in each output file.
    Example usage:
    
        >> from toolbox import csv_splitter;
        >> csv_splitter.split(open('/home/ben/input.csv', 'r'));
    
    """
import csv
with open('bdata.csv', encoding="utf8") as csv_data:
    reader = csv.reader(csv_data,  delimiter=',')
    current_piece = 1
    current_out_path = os.path.join(
         output_path,
         output_name_template  % current_piece
    )
with io.open('output4.csv', "w", encoding="utf-8") as csvfile:
    writer = csv.writer(csvfile, lineterminator="\n",delimiter=",", quotechar='"')
    current_limit = row_limit
    if keep_headers:
        headers = reader.next()
        writer.writerow(headers)
    for i, row in enumerate(reader):
        if i + 1 > current_limit:
            current_piece += 1
            current_limit = row_limit * current_piece
            current_out_path = os.path.join(
               output_path,
               output_name_template  % current_piece
            )
            writer = csv.writer(open(current_out_path, 'w'), delimiter=',')
            if keep_headers:
                writer.writerow(headers)
        current_out_writer.writerow(row)