# -*- coding:utf-8 -*-
import csv

camps = {}
clickids = set()

def main():
  progress = 0
  with open("./3sClick.txt") as f:
    for line in f:
      progress += 1
      if progress % 500000 == 0:
        print "LOG", progress

      line = line.strip()
      if line == "":
        continue
      # print line
      items = line.split(",")
      clickid = items[0]
      campaign_id = items[1]
      if clickid in clickids:
        continue

      clickids.add(clickid)
      if not camps.has_key(campaign_id):
        camps[campaign_id] = 1
      else:
        camps[campaign_id] += 1
        # print items
  writer = csv.writer(open('../../distinct-3s-click.csv', 'w'))
  for clickid in clickids:
    writer.writerow([clickid])


if __name__ == "__main__":
  main()
