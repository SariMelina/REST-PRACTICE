from node:10.13-alpine
WORKDIR rest-practice
COPY . .
RUN npm i
EXPOSE 8181
CMD ["node" , "index"]