# file each line change something

newFile = open("./result.log", 'w')
for line in open("install_2016-10-01_00_0.info.log"):
    aTmp = line.split(',')
    aTmp[24] = 666
    # print aTmp
    sRes = ','.join(str(e) for e in aTmp)
    newFile.write(sRes)







